import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useCanonical } from "@/hooks/useCanonical";
import { motion } from "framer-motion";
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

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useCanonical(post ? `/blog/${post.slug}` : "/blog");

  useEffect(() => {
    if (!post) return;
    document.title = post.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", post.metaDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = post.metaDescription;
      document.head.appendChild(meta);
    }
    return () => { document.title = "Haft Park"; };
  }, [post]);

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

        <article className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </motion.div>

            <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </motion.h1>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg max-w-none">
              {post.content.map((section, i) => {
                switch (section.type) {
                  case "h2":
                    return <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-foreground">{section.text}</h2>;
                  case "h3":
                    return <h3 key={i} className="mt-8 mb-3 text-xl font-semibold text-foreground">{section.text}</h3>;
                  case "p":
                    return <p key={i} className="mb-4 text-base leading-relaxed text-muted-foreground">{section.text}</p>;
                  case "ul":
                    return (
                      <ul key={i} className="mb-6 ml-6 list-disc space-y-2">
                        {section.items?.map((item, j) => (
                          <li key={j} className="text-base leading-relaxed text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="mt-16 rounded-lg border border-border bg-primary p-8 text-center md:p-12">
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
            </motion.div>

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
