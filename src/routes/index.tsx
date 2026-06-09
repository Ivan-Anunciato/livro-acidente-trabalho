import { createFileRoute } from "@tanstack/react-router";
import autorImg from "@/assets/autor.jpg";

const WHATSAPP_URL =
  "https://wa.me/5513997403850?text=" +
  encodeURIComponent(
    "Olá Dr. Ivan! Tenho interesse no livro 'Acidente de Trabalho: Justiça para o Trabalhador, Consciência para o Empregador' e no e-book bônus."
  );

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acidente de Trabalho: Livro do Dr. Ivan Anunciato" },
      {
        name: "description",
        content:
          "Livro do advogado Dr. Ivan Anunciato sobre acidente de trabalho. Justiça para o trabalhador, consciência para o empregador. Ganhe o e-book bônus de auxílio-acidente.",
      },
      { property: "og:title", content: "Acidente de Trabalho: Justiça para o trabalhador" },
      {
        property: "og:description",
        content: "Livro do Dr. Ivan Anunciato (OAB/SP 213.905). Versão impressa e digital + e-book bônus.",
      },
      { property: "og:type", content: "book" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-parchment text-ink">
      <Header />
      <Hero />
      <Quote />
      <Summary />
      <ForWhom />
      <Bonus />
      <Author />
      <Formats />
      <FinalCTA />
      <Footer />
      <FloatingWhats />
    </main>
  );
}

function GoldRule() {
  return <span className="inline-block h-px w-12 bg-gold align-middle" />;
}

function CTAButton({
  children,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-gold text-ink-deep hover:bg-gold-soft hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(184,134,11,0.5)]"
      : "border border-gold text-gold hover:bg-gold hover:text-ink-deep";
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-end">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="hidden text-xs uppercase tracking-[0.2em] text-parchment/80 hover:text-gold md:inline-block"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-parchment">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(184,134,11,0.6), transparent 40%), radial-gradient(circle at 80% 90%, rgba(184,134,11,0.3), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 pt-32 pb-24 text-center md:px-12 md:pt-40 md:pb-32">
        <div className="flex flex-col items-center">
          <h1 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Acidente de trabalho{" "}
            <span className="italic text-gold">não é azar</span>. Tem causa e tem responsável.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-parchment/80 md:text-lg">
            Um livro do Dr. Ivan Anunciato sobre justiça para o trabalhador e consciência para o
            empregador, escrito em linguagem direta, para ser lido por qualquer pessoa.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton>Quero meu exemplar</CTAButton>
            <CTAButton variant="outline">Versão digital</CTAButton>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-parchment/50">
            Inclui e-book bônus sobre auxílio-acidente
          </p>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="bg-parchment-deep py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <p className="font-display text-2xl italic leading-snug text-ink md:text-4xl">
          "O Direito é a ponte entre a dor e a reparação. Justiça começa com informação."
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.25em] text-ink/60">
          <GoldRule />
          <span>Dr. Ivan Anunciato</span>
          <GoldRule />
        </div>
      </div>
    </section>
  );
}

function Summary() {
  const topics = [
    "O que caracteriza um acidente de trabalho e por que ele nunca é fatalidade.",
    "Direitos do trabalhador acidentado: estabilidade, indenizações e benefícios.",
    "Responsabilidade do empregador e como prevenir riscos no ambiente de trabalho.",
    "Caminhos práticos: do primeiro atendimento médico ao processo judicial.",
    "Casos da prática do autor que mostram a aplicação concreta do Direito.",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.3fr] md:px-12">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <GoldRule />
            <span>Sobre o livro</span>
          </div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Uma obra para quem trabalha e para quem emprega.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75">
            O livro reúne anos de prática em Direito Acidentário e traduz a complexidade da lei
            em um material que esclarece direitos, aponta responsabilidades e devolve ao
            trabalhador o protagonismo da sua história.
          </p>
        </div>
        <ul className="space-y-5">
          {topics.map((t, i) => (
            <li key={i} className="flex gap-5 border-b border-ink/10 pb-5">
              <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <p className="pt-1 text-base leading-relaxed text-ink/85">{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ForWhom() {
  const cards = [
    {
      title: "Trabalhadores",
      body:
        "Para quem sofreu, ou conhece alguém que sofreu, um acidente e precisa entender quais são os seus direitos.",
    },
    {
      title: "Empregadores",
      body:
        "Para empresas que querem prevenir, agir com responsabilidade e construir ambientes de trabalho mais seguros.",
    },
    {
      title: "Profissionais da área",
      body:
        "Advogados, estudantes, peritos e profissionais de RH em busca de um material prático de Direito Acidentário.",
    },
  ];
  return (
    <section className="bg-ink py-24 text-parchment md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-gold">
            <GoldRule />
            <span>Para quem serve</span>
          </div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            A vida do trabalhador <span className="italic text-gold">importa.</span>
          </h2>
        </div>
        <div className="grid gap-px bg-parchment/10 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="bg-ink p-8 md:p-10">
              <h3 className="font-display text-2xl text-parchment">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-parchment/70">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bonus() {
  return (
    <section className="relative overflow-hidden bg-parchment py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:items-center md:gap-20 md:px-12">
        <div className="relative">
          <div className="relative mx-auto max-w-sm border-2 border-gold bg-gold/15 p-8 text-ink shadow-[0_30px_60px_-20px_rgba(184,134,11,0.35)]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">E-book bônus</div>
            <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-ink">
              Como requerer o seu <span className="italic text-gold">auxílio-acidente</span>
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-ink/80">
              Um passo a passo direto: documentos necessários, prazos, perícia médica e o que fazer
              quando o INSS nega o benefício.
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-gold/40 pt-4 text-[10px] uppercase tracking-[0.25em] text-ink/60">
              <span>A&amp;A Anunciato</span>
              <span>PDF · Grátis</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <GoldRule />
            <span>Brinde exclusivo</span>
          </div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Comprou o livro? <br />
            Ganhou o e-book.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/75">
            Todo leitor recebe gratuitamente o e-book <em>"Como requerer o seu auxílio-acidente"</em>,
            um material prático para transformar informação em ação imediata.
          </p>
          <div className="mt-10">
            <CTAButton>Quero o livro + e-book</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Author() {
  return (
    <section className="bg-ink-deep py-24 text-parchment md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-12">
        <div className="relative">
          <div className="absolute inset-0 -z-10 -translate-x-4 -translate-y-4 border border-gold/40" />
          <img
            src={autorImg}
            alt="Dr. Ivan Luiz Rossi Anunciato"
            width={896}
            height={1120}
            loading="lazy"
            className="h-full w-full object-cover grayscale-[15%]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-gold">
            <GoldRule />
            <span>O autor</span>
          </div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Dr. Ivan Luiz Rossi Anunciato
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-parchment/80">
            <p>
              Advogado fundador da A&amp;A Anunciato Advogados, com atuação em{" "}
              <span className="text-gold">Direito Acidentário, Trabalhista, Previdenciário</span> e
              Direito da Saúde Suplementar, em todo o Brasil.
            </p>
            <p className="font-display text-xl italic text-gold">
              "Você não será apenas mais um número. Somos uma EQUIPE."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Formats() {
  const items = [
    {
      tag: "Impresso",
      title: "Edição física",
      desc: "1ª edição, capa dura, ISBN 978-85-5963-289-7. Priint Impressões Inteligentes.",
    },
    {
      tag: "Digital",
      title: "Versão e-book do livro",
      desc: "Para ler no celular, tablet ou computador. Entrega imediata após confirmação.",
    },
    {
      tag: "Bônus",
      title: "E-book auxílio-acidente",
      desc: "Guia passo a passo gratuito para quem adquirir qualquer uma das versões.",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <GoldRule />
            <span>Como adquirir</span>
          </div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Escolha o formato que combina com você.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group border border-ink/10 bg-card p-8 transition-all duration-300 hover:border-gold hover:-translate-y-1"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.tag}</div>
              <h3 className="mt-5 font-display text-2xl text-ink">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-ink py-24 text-parchment md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <div className="mb-6 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.25em] text-gold">
          <GoldRule />
          <span>Garanta o seu</span>
          <GoldRule />
        </div>
        <h2 className="font-display text-4xl leading-tight md:text-6xl">
          Justiça começa com <span className="italic text-gold">informação.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-parchment/75">
          Fale agora pelo WhatsApp e receba seu livro (impresso ou digital) junto com o e-book
          bônus.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CTAButton>Comprar pelo WhatsApp</CTAButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-deep py-10" />
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink-deep shadow-[0_10px_30px_-8px_rgba(184,134,11,0.7)] transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.8 11.8 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44Zm-8.48 18.2h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.83 9.83 0 0 1-1.5-5.18c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.97c0 5.44-4.43 9.83-9.85 9.83Zm5.4-7.37c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.51l-.56-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.43s1.05 2.82 1.2 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.85.12.56-.08 1.74-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
