import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import type { BlogPostPreview } from "@/lib/types/blog";
import { formatDate } from "@/lib/utils";

interface RelatedPostsProps {
  posts: BlogPostPreview[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-8">
        Artigos Relacionados
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-background h-full">
              <CardContent className="p-6 space-y-4">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-semibold">
                  {post.category}
                </div>
                <h3 className="text-lg font-bold text-foreground hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

