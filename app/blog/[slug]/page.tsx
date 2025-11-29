import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { ArticleSchema, FAQPageSchema, WebPageSchema, BreadcrumbSchema } from "@/lib/schema-markup";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

// Lazy loading de componentes pesados do blog
const BlogPostContent = dynamic(() => import("@/components/blog/BlogPostContent").then(mod => ({ default: mod.BlogPostContent })), {
  loading: () => <div className="animate-pulse space-y-4"><div className="h-8 bg-muted rounded w-3/4"></div><div className="h-4 bg-muted rounded"></div></div>,
});

const RelatedPosts = dynamic(() => import("@/components/blog/RelatedPosts").then(mod => ({ default: mod.RelatedPosts })), {
  loading: () => <div className="animate-pulse space-y-4"><div className="h-6 bg-muted rounded w-1/2"></div></div>,
});

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo Não Encontrado",
    };
  }

  return createMetadata({
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    url: `/blog/${slug}`,
    image: post.featuredImage,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen">
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        image={post.featuredImage}
        datePublished={post.publishedAt.toISOString()}
        dateModified={post.updatedAt?.toISOString()}
        author={post.author.name}
        category={post.category}
      />
      {post.faqs && post.faqs.length > 0 && <FAQPageSchema faqs={post.faqs} />}
      <WebPageSchema
        name={post.seo.metaTitle}
        description={post.seo.metaDescription}
        url={`/blog/${slug}`}
        image={post.featuredImage}
      />
      <BreadcrumbSchema
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title }
        ]}
      />
      <Header />
      <main>
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <BlogPostContent post={post} />
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

// Gerar rotas estáticas para todos os posts (ISR - Incremental Static Regeneration)
export async function generateStaticParams() {
  const { getAllPosts } = await import("@/lib/blog");
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

