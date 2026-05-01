import { Link } from "react-router-dom";
import { useSeoMeta, useBreadcrumbJsonLd } from "@/hooks/useSeoMeta";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { blogPosts } from "@/data/blogPosts";
import { useIsVisible } from "@/hooks/useIsVisible";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Blog = () => {
  const [ref, inView] = useIsVisible<HTMLElement>({ margin: "-80px" });

  useSeoMeta({
    title: "Blog o hafcie komputerowym | Haft Park",
    description: "Poradniki, porównania i nowości ze świata haftu komputerowego. Dowiedz się, jak wybrać najlepszą metodę znakowania odzieży dla Twojej firmy.",
    path: "/blog",
  });
  useBreadcrumbJsonLd([
    { name: "Haft Park", url: "https://www.haftpark.com/" },
    { name: "Blog", url: "https://www.haftpark.com/blog" },
  ]);

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
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="py-16 md:py-24" ref={ref}>
          <div className="container">
            <p className={`sa sa-ysm ${inView ? "vis" : ""} mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary`}>
              Blog · Haft Park
            </p>
            <h1
              className={`sa sa-ysm ${inView ? "vis" : ""} mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl`}
              style={{ transitionDelay: inView ? "100ms" : "0ms" }}
            >
              Wiedza o <span className="text-primary">hafcie komputerowym</span>
            </h1>
            <p
              className={`sa sa-ysm ${inView ? "vis" : ""} mb-16 max-w-lg text-lg leading-relaxed text-muted-foreground`}
              style={{ transitionDelay: inView ? "200ms" : "0ms" }}
            >
              Poradniki, porównania i praktyczne wskazówki od profesjonalistów.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <article
                  key={post.slug}
                  className={`sa sa-y ${inView ? "vis" : ""} group flex flex-col rounded-lg border border-border bg-card overflow-hidden`}
                  style={{ transitionDelay: inView ? `${200 + i * 80}ms` : "0ms" }}
                >
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("pl-PL", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <h2 className="mb-3 text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Button asChild variant="outline" size="sm" className="gap-2 self-start">
                      <Link to={`/blog/${post.slug}`}>
                        Czytaj dalej
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Blog;
