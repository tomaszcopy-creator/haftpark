import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCanonical } from "@/hooks/useCanonical";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { blogPosts } from "@/data/blogPosts";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const Blog = () => {
  useCanonical("/blog");

  useEffect(() => {
    document.title = "Blog o hafcie komputerowym | Haft Park";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Poradniki, porównania i nowości ze świata haftu komputerowego. Dowiedz się, jak wybrać najlepszą metodę znakowania odzieży dla Twojej firmy.";
    if (metaDesc) {
      metaDesc.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
    return () => { document.title = "Haft Park"; };
  }, []);

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

        <section className="py-16 md:py-24">
          <div className="container">
            <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Blog · Haft Park
            </motion.p>
            <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Wiedza o <span className="text-primary">hafcie komputerowym</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mb-16 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Poradniki, porównania i praktyczne wskazówki od profesjonalistów.
            </motion.p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden"
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
                </motion.article>
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
