import { useParams, Link, Navigate } from "react-router-dom";
import { useSeoMeta, useArticleJsonLd, useBreadcrumbJsonLd } from "@/hooks/useSeoMeta";
import { useIsVisible } from "@/hooks/useIsVisible";

function renderText(text: string): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    const cls = "text-primary underline underline-offset-4 hover:text-primary/80 transition-colors";
    if (href.startsWith("/")) {
      return <Link key={i} to={href} className={cls}>{label}</Link>;
    }
    return <a key={i} href={href} className={cls} target="_blank" rel="noopener noreferrer">{label}</a>;
  });
}
import { Phone, ArrowLeft, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { getPostBySlug } from "@/data/blogPosts";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const [ref, inView] = useIsVisible<HTMLElement>({ margin: "-80px" });

  useSeoMeta({
    title: post?.metaTitle ?? "Blog | Haft Park",
    description: post?.metaDescription ?? "",
    path: post ? `/blog/${post.slug}` : "/blog",
  });

  useArticleJsonLd({
    headline: post?.title ?? "",
    description: post?.metaDescription ?? "",
    datePublished: post?.date ?? "",
    url: `https://www.haftpark.com/blog/${post?.slug ?? ""}`,
  });

  useBreadcrumbJsonLd([
    { name: "Haft Park", url: "https://www.haftpark.com/" },
    { name: "Blog", url: "https://www.haftpark.com/blog" },
    { name: post?.title ?? "", url: `https://www.haftpark.com/blog/${post?.slug ?? ""}` },
  ]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container pt-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Haft Park</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <article className="py-16 md:py-24" ref={ref}>
          <div className="container max-w-3xl">
            <div className={`sa sa-ysm ${inView ? "vis" : ""} mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground`}>
              <CalendarDays className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>

            <h1
              className={`sa sa-ysm ${inView ? "vis" : ""} mb-10 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl`}
              style={{ transitionDelay: inView ? "100ms" : "0ms" }}
            >
              {post.title}
            </h1>

            <div
              className={`sa sa-ysm ${inView ? "vis" : ""} prose prose-lg max-w-none`}
              style={{ transitionDelay: inView ? "200ms" : "0ms" }}
            >
              {post.content.map((section, i) => {
                switch (section.type) {
                  case "h2":
                    return <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-foreground">{section.text}</h2>;
                  case "h3":
                    return <h3 key={i} className="mt-8 mb-3 text-xl font-semibold text-foreground">{section.text}</h3>;
                  case "p":
                    return <p key={i} className="mb-4 text-base leading-relaxed text-muted-foreground">{renderText(section.text ?? "")}</p>;
                  case "ul":
                    return (
                      <ul key={i} className="mb-6 ml-6 list-disc space-y-2">
                        {section.items?.map((item, j) => (
                          <li key={j} className="text-base leading-relaxed text-muted-foreground">{renderText(item)}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {/* CTA */}
            <div
              className={`sa sa-ysm ${inView ? "vis" : ""} mt-16 rounded-lg border border-border bg-primary p-8 text-center md:p-12`}
              style={{ transitionDelay: inView ? "300ms" : "0ms" }}
            >
              <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:text-3xl">
                Potrzebujesz haftu dla swojej firmy?
              </h2>
              <p className="mb-6 text-primary-foreground/80">
                Skontaktuj się z nami — wycena gratis, realizacja od 1 sztuki.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary" className="gap-2 px-8 text-base">
                  <a href="tel:+48510751008">
                    <Phone className="h-4 w-4" />
                    510 751 008
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/#contact">Formularz kontaktowy</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild variant="ghost" className="gap-2">
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4" />
                  Wróć do bloga
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BlogPost;
