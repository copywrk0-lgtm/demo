import Link from "next/link"; import Reveal from "@/components/Reveal"; import {articles} from "@/lib/articles";
export const metadata={title:'Insights'};
const articleImages=[
"https://images.pexels.com/photos/6111590/pexels-photo-6111590.jpeg?auto=compress&cs=tinysrgb&w=1200",
"https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=1200",
"https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=1200"
];
export default function Blog(){return <><section className="page-hero"><div className="eyebrow">INSIGHTS</div><h1>Useful things to know about recovery.</h1><p>Short, practical reads from the Motion &amp; Mend team.</p></section>
<Reveal><section className="section"><div className="editorial-intro"><div><div className="eyebrow">NO FLUFF</div><h2>Understand your body without turning it into homework.</h2></div><div className="editorial-intro-side"><p>These notes are designed to make common physiotherapy ideas easier to understand — from pain and desk work to returning to sport.</p><img src="https://images.pexels.com/photos/5793695/pexels-photo-5793695.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Physiotherapist speaking with a patient" loading="lazy"/></div></div></section></Reveal>
<section className="blog-grid">{Object.entries(articles).map(([slug,a],i)=><Reveal key={slug} delay={i*90} variant="scale"><Link className="article-link" href={`/blog/${slug}`}><article className="article article-image"><img src={articleImages[i%articleImages.length]} alt={`${a.title} article`} loading="lazy"/><div className="article-body"><div className="num">{a.kicker}</div><h3>{a.title}</h3><p>{a.sections[0][1]}</p><span className="arrow">Read article →</span></div></article></Link></Reveal>)}</section>
<Reveal><section className="section"><div className="closing-cta"><div><div className="eyebrow">HAVE A QUESTION?</div><h2>Reading helps. An assessment makes it personal.</h2><p>If something is affecting your movement, work, sport or daily life, talk to the clinic about what you are experiencing.</p></div><Link className="cta light" href="/contact">Talk to the clinic →</Link></div></section></Reveal></>}
