import Image from "next/image";
import Menu from "../components/Layout/Menu/Menu";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-2xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div class="min-h-[280px] h-full">
          <Image
            src=""
            class="w-full h-full object-cover"
            alt="card image"
            width={500}
            height={500}
          />
        </div>

        <div class="p-6">
            <Menu />
        </div>
      </div>
    </main>
  );
}
