import Link from "next/link";

export default function MobileCta(){
  return <div className="mobile-cta" aria-label="Quick appointment action">
    <span>Ready to move forward?</span>
    <Link href="/contact">Start an enquiry →</Link>
  </div>;
}
