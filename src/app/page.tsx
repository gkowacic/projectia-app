"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WA_LINK = "https://wa.me/5547933808082";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const WaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-dm)] bg-[#F5F4EF] text-[#141413] min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F4EF]/85 backdrop-blur-lg border-b border-[#141413]/[0.08]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-tight select-none">
            Project<span className="text-[#EA580C]">.IA</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#141413]/60 font-medium">
            <a href="#servicos" className="hover:text-[#141413] transition-colors duration-200">Serviços</a>
            <a href="#cases" className="hover:text-[#141413] transition-colors duration-200">Cases</a>
            <a href="#como-funciona" className="hover:text-[#141413] transition-colors duration-200">Como Funciona</a>
            <a href="#contato" className="hover:text-[#141413] transition-colors duration-200">Contato</a>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141413] text-[#F5F4EF] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#EA580C] transition-colors duration-300"
          >
            Fale conosco
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", animation: "pulse 6s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", animation: "pulse 8s ease-in-out infinite 2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(196,181,253,0.15) 0%, transparent 70%)" }}
          />
        </div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#141413 1px, transparent 1px), linear-gradient(90deg, #141413 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-28 relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-[#EA580C]/10 text-[#EA580C] text-xs font-semibold px-4 py-2 rounded-full mb-10 border border-[#EA580C]/20 tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
            Automação com Inteligência Artificial
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.05] tracking-tight mb-8 max-w-4xl"
          >
            IA que trabalha.{" "}
            <br className="hidden md:block" />
            <span className="italic text-[#EA580C]">Empresa</span>{" "}
            que cresce.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-[#141413]/55 max-w-xl mb-12 leading-relaxed"
          >
            Automatizamos os processos do seu negócio com Inteligência Artificial.
            Sem complicação, sem jargão técnico.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#141413] text-[#F5F4EF] px-8 py-4 rounded-full text-base font-medium hover:bg-[#EA580C] transition-all duration-300 group shadow-lg shadow-[#141413]/10"
            >
              <WaIcon className="w-5 h-5" />
              Falar com especialista
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-[#141413]/10 flex flex-wrap gap-12"
          >
            {[
              ["24/7", "Operação contínua"],
              ["Semanas", "Não meses"],
              ["100%", "Resultados mensuráveis"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#141413]">{num}</div>
                <div className="text-sm text-[#141413]/45 mt-1 font-medium">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-32 border-t border-[#141413]/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs font-semibold text-[#EA580C] mb-5 tracking-[0.2em] uppercase">O problema</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold mb-16 max-w-lg leading-[1.15]">
              Sua equipe ainda perde tempo com isso?
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Tarefas repetitivas consomem horas da sua equipe",
                desc: "Processos manuais que poderiam ser automatizados drenam produtividade e geram erros desnecessários.",
              },
              {
                num: "02",
                title: "Sistemas que não conversam entre si",
                desc: "Dados espalhados em planilhas, e-mails e ferramentas desconectadas criam gargalos invisíveis no dia a dia.",
              },
              {
                num: "03",
                title: "Decisões sem dados em tempo real",
                desc: "Sem visibilidade dos números certos, no momento certo, decisões importantes ficam baseadas em achismo.",
              },
            ].map((item, i) => (
              <FadeUp key={item.num} delay={i * 0.1}>
                <div className="bg-[#141413]/[0.025] border border-[#141413]/[0.08] rounded-2xl p-8 hover:border-[#EA580C]/25 hover:bg-[#EA580C]/[0.025] transition-all duration-300 h-full">
                  <span className="font-[family-name:var(--font-playfair)] text-6xl font-semibold text-[#141413]/10 leading-none block mb-4">
                    {item.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold mb-3 leading-snug">{item.title}</h3>
                  <p className="text-[#141413]/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCAO */}
      <section className="py-28 bg-[#141413] text-[#F5F4EF] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(196,181,253,0.1) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-semibold mb-10 max-w-2xl leading-[1.1]">
              A Project.IA{" "}
              <span className="italic text-[#FED7AA]">resolve.</span>
            </h2>
            <p className="text-[#F5F4EF]/55 text-lg mb-12 max-w-xl leading-relaxed">
              Trazemos IA para dentro do seu negócio de forma prática, sem necessidade de equipe técnica interna.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Rápido", desc: "Semanas, não meses" },
                { label: "Simples", desc: "Sem jargão técnico" },
                { label: "Mensurável", desc: "ROI rastreável" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="border border-[#F5F4EF]/15 text-[#F5F4EF] px-6 py-3 rounded-full flex items-center gap-2 hover:border-[#EA580C] hover:text-[#FED7AA] transition-all duration-300 cursor-default"
                >
                  <span className="font-semibold">{pill.label}</span>
                  <span className="text-[#F5F4EF]/35 text-sm">— {pill.desc}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVICOS */}
      <section id="servicos" className="py-32 border-t border-[#141413]/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs font-semibold text-[#EA580C] mb-5 tracking-[0.2em] uppercase">Serviços</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold mb-16 max-w-md leading-[1.15]">
              O que entregamos
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Automação de Processos",
                desc: "Eliminamos tarefas manuais e repetitivas com fluxos inteligentes que trabalham enquanto você dorme.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                ),
                title: "Agentes IA no WhatsApp",
                desc: "Atendimento, qualificação e vendas automatizadas no WhatsApp. Seu negócio disponível 24 horas por dia.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                  </svg>
                ),
                title: "Integrações entre Sistemas",
                desc: "Conectamos suas ferramentas para que os dados fluam sem fricção. CRM, ERP, WhatsApp, planilhas — tudo integrado.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: "Dashboards Inteligentes",
                desc: "Visualize seus KPIs em tempo real e tome decisões com dados. Não com achismo.",
              },
            ].map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.08}>
                <div className="group border border-[#141413]/10 rounded-2xl p-8 hover:border-[#EA580C]/35 hover:shadow-xl hover:shadow-[#EA580C]/5 transition-all duration-300 cursor-default h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#EA580C]/[0.08] text-[#EA580C] flex items-center justify-center mb-6 group-hover:bg-[#EA580C] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold mb-3 leading-snug">{service.title}</h3>
                  <p className="text-[#141413]/55 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CASE */}
      <section id="cases" className="py-32 border-t border-[#141413]/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs font-semibold text-[#EA580C] mb-5 tracking-[0.2em] uppercase">Caso Real</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="bg-[#141413] rounded-3xl p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)" }} />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,181,253,0.08) 0%, transparent 70%)" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/[0.08] text-white/60 text-xs font-medium px-3 py-1.5 rounded-full mb-8 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Em operação agora
                </div>
                <div className="text-[#EA580C] text-sm font-semibold mb-3 tracking-wide">Translaser</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-white mb-6 max-w-2xl leading-tight">
                  SDR automatizado no WhatsApp com IA
                </h3>
                <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-14">
                  Agente SDR automatizado no WhatsApp qualifica leads 24h por dia usando IA, enquanto a equipe foca em fechar negócios. O agente identifica necessidades, recomenda produtos e encaminha leads quentes para os vendedores.
                </p>
                <div className="flex flex-wrap gap-10">
                  {[
                    ["24/7", "Disponível"],
                    ["0", "Leads perdidos"],
                    ["100%", "Automatizado"],
                  ].map(([num, label]) => (
                    <div key={label}>
                      <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-white">{num}</div>
                      <div className="text-white/35 text-sm mt-1 font-medium">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-32 border-t border-[#141413]/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs font-semibold text-[#EA580C] mb-5 tracking-[0.2em] uppercase">Processo</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold mb-20 max-w-md leading-[1.15]">
              Como funciona
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {[
              { num: "1", title: "Diagnóstico", desc: "Entendemos seus processos e gargalos. Mapeamos onde a IA gera mais impacto para o seu negócio." },
              { num: "2", title: "Implementação", desc: "Construímos a solução em semanas, não meses. Sem código desnecessário, sem burocracia." },
              { num: "3", title: "Resultado", desc: "Você acompanha o impacto em tempo real. Dados claros, ROI mensurável desde o primeiro dia." },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.12}>
                <div className="relative">
                  <div
                    className="font-[family-name:var(--font-playfair)] font-semibold text-[#141413]/[0.06] leading-none select-none absolute -top-6 -left-2"
                    style={{ fontSize: "9rem" }}
                  >
                    {step.num}
                  </div>
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full border-2 border-[#EA580C] text-[#EA580C] flex items-center justify-center text-sm font-bold mb-6">
                      {step.num}
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-[#141413]/55 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="py-32 border-t border-[#141413]/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-semibold mb-6 leading-[1.1]">
                Pronto para trazer{" "}
                <span className="italic text-[#EA580C]">IA</span>{" "}
                para o seu negócio?
              </h2>
              <p className="text-[#141413]/55 text-lg mb-12 leading-relaxed max-w-lg mx-auto">
                Conversa de 30 minutos. Sem compromisso. Entendemos seu desafio e mostramos como a IA pode resolver.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#EA580C] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#C2410C] transition-all duration-300 shadow-2xl shadow-[#EA580C]/25 hover:shadow-[#EA580C]/40 hover:-translate-y-0.5 group"
              >
                <WaIcon className="w-5 h-5" />
                Agendar conversa gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#141413]/10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#141413]/35">
          <span className="font-[family-name:var(--font-playfair)] text-base font-semibold text-[#141413]/55">
            Project<span className="text-[#EA580C]">.IA</span>
          </span>
          <span>Project.IA é uma empresa do grupo ProjectEXE</span>
          <span>© 2025 Todos os direitos reservados</span>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
        aria-label="Falar no WhatsApp"
      >
        <WaIcon className="w-7 h-7" />
      </a>
    </main>
  );
}
