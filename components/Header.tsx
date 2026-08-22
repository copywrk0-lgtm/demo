"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links=[['Home','/'],['About','/founder'],['Services','/services'],['Approach','/approach'],['Insights','/blog']];
export default function Header(){
 const [open,setOpen]=useState(false); const path=usePathname();
 return <><a className="skip-link" href="#main-content">Skip to content</a><header className="site-header"><Link className="logo" href="/" onClick={()=>setOpen(false)}><span className="logo-mark"/><span>Motion &amp; Mend<small>PHYSIOTHERAPY</small></span></Link>
 <button className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-navigation" onClick={()=>setOpen(!open)} />
 <nav id="primary-navigation" aria-label="Primary navigation" className={`nav ${open?'mobile-open':''}`}>{links.map(([label,href])=><Link key={href} className={path===href || (href==='/services'&&path.startsWith('/services/')) || (href==='/blog'&&path.startsWith('/blog')) || (href==='/founder'&&path==='/founder') ? 'active':''} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="pill" href="/contact" onClick={()=>setOpen(false)}>📍 Koramangala, Bengaluru</Link></nav>
 </header></>;
}
