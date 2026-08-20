import Link from "next/link"; import {notFound} from "next/navigation"; import Reveal from "@/components/Reveal"; import {articles} from "@/lib/articles";
export function generateStaticParams(){return Object.keys(articles).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles[slug as keyof typeof articles];return a?{title:a.title,description:a.sections[0][1]}:{}}
const articleImages:Record<string,string>={
 "pain-is-not-the-whole-story":"https://images.pexels.com/photos/5793695/pexels-photo-5793695.jpeg?auto=compress&cs=tinysrgb&w=1600",
 "desk-setup-is-not-the-enemy":"https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=1600",
 "returning-to-sport":"https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=1600"
};
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles[slug as keyof typeof articles];if(!a)notFound();return <><section className="page-hero article-hero"><div className="eyebrow">{a.kicker}</div><h1>{a.title}</h1><p>Practical guidance from Motion &amp; Mend Physiotherapy.</p><img src={articleImages[slug]||articleImages["pain-is-not-the-whole-story"]} alt={`${a.title} — Motion & Mend Physiotherapy`} fetchPriority="high"/></section><Reveal><article className="article-page">{a.sections.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}<Link className="cta" href="/contact">Talk to the clinic →</Link></article></Reveal></>}
