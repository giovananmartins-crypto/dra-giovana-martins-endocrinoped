import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { CTASection } from "@/components/sections/CTASection";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { ArticleSchema, FAQPageSchema } from "@/lib/schema-markup";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

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
      />
      {post.faqs && post.faqs.length > 0 && <FAQPageSchema faqs={post.faqs} />}
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

