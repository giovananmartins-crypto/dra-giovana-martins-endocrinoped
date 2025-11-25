import { Calendar, Clock, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/types/blog";
import { ShareButtons } from "./ShareButtons";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      {/* Header do Artigo */}
      <header className="mb-8 pb-8 border-b border-border">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="inline-block px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-semibold">
            {post.category}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min de leitura</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author.name}</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Imagem de Destaque */}
      {post.featuredImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={post.featuredImage}
            alt={`${post.title} - Artigo sobre ${post.category} por Dra. Giovana Martins, Endocrinologista Pediátrica`}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Conteúdo do Artigo */}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Botões de Compartilhamento */}
      <ShareButtons
        url={`/blog/${post.slug}`}
        title={post.title}
        description={post.excerpt}
      />
    </article>
  );
}

