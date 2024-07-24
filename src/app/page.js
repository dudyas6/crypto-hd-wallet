"use client";
import Main from "../components/Main/Main";
import SessionContext from "../lib/sessionContext";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SessionContext>
        <Main />
      </SessionContext>
    </main>
  );
}
