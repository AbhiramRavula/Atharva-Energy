import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-bg section-padding">
      <div className="container-max text-center">
        {/* 404 graphic */}
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-heading font-bold text-brand-gold opacity-20 select-none">
            404
          </span>
        </div>

        <div className="-mt-12 relative z-10">
          <div className="text-5xl mb-5">⚡</div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-text mb-4">
            Page Not Found
          </h1>
          <p className="text-brand-muted text-base max-w-md mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/products" className="btn-secondary">
              View Products
            </Link>
            <Link href="/contact" className="btn-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
