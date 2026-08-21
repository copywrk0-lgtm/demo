import Link from "next/link";

export default function MobileCta(){
  return <div className="mobile-cta" aria-label="Quick appointment action">
    <span>Ready to move better?</span>
    <Link href="/contact">Book an assessment →</Link>
  </div>;
}
