export default function SectionTitle({ nomor, judul }) {
  return (
     <h2 className="flex items-baseline gap-3 text-2xl font-bold sm:text-3xl text-center">
      <span className="font-mono text-base text-cyan-400">{nomor}.</span>
      {judul}
    </h2>
  );
}
