import Link from "next/link";

export default function Footer(){
  return <footer className="footer">
    <div className="footer-top">
      <Link className="logo" href="/"><span className="logo-mark"/><span>Motion &amp; Mend<small>PHYSIOTHERAPY</small></span></Link>
      <div className="footer-contact">
        <Link href="/services">Services</Link>
        <Link href="/approach">Approach</Link>
        <Link href="/contact">Start an enquiry</Link>
      </div>
    </div>
    <div className="footer-line"/>
    <div className="footer-bottom"><span>KORAMANGALA, BENGALURU</span><span>© {new Date().getFullYear()} MOTION &amp; MEND</span><span className="footer-legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/medical-disclaimer">Medical disclaimer</Link><Link href="/cancellation-policy">Appointments</Link></span></div>
  </footer>;
}
