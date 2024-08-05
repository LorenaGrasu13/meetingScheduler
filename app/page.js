import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Layout from "./_components/LAyout";

export default function Home() {
  return (
   <div>
      <Layout>
        <Hero />
      </Layout>
   </div>
  );
}
