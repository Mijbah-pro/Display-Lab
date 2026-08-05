import Image from "next/image";
import Reveal from "../utils/Reveal";

export default function ProductsFiveCard() {
  return (
    <div className="bg-white py-16 sm:py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Bento Grid Container */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-16">
          
          {/* Row 1: 2 Columns */}
          <div className="grid gap-4 lg:grid-cols-2">
            
            {/* Card 1: Performance */}
            <Reveal>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-80">
              <div>
                <h3 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 text-right mb-5 ">Push to deploy</h3>
                
              </div>
              <div className="">
                <Image width={1000} height={1000} className="w-full" src="/images/products/1.png" alt="" />
              </div>
            </div>
            </Reveal>

            {/* Card 2: Releases */}
            <Reveal>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-80">
              <div>
                <h3 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 text-right mb-5 ">Push to deploy</h3>
                
              </div>
              <div className="">
                <Image width={1000} height={1000} className="w-full" src="/images/products/2.png" alt="" />
              </div>
            </div>
            </Reveal>

          </div>

          {/* Row 2: 3 Columns */}
          <Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            
            {/* Card 3: Shortcuts */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-65">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 text-right mb-5">Push to deploy</h4>
                <Image width={1000} height={1000} className="w-full" src="/images/products/3.png" alt="Push to deploy" />
                {/* <Image width={1000} height={1000} className="w-full" src="/images/cms/displayLab CMS.png" alt="Push to deploy" /> */}

              </div>
             
            </div>

            {/* Card 4: Integrations */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-65">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 text-right mb-5">Push to deploy</h4>
                <Image width={1000} height={1000} className="w-full" src="/images/products/4.png" alt="Push to deploy" />
              </div>
             
            </div>

            {/* Card 5: Infrastructure */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-65">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 text-right mb-5">Push to deploy</h4>
                <Image width={1000} height={1000} className="w-full" src="/images/products/1.png" alt="Push to deploy" />
              </div>
             
            </div>

          </div>
          </Reveal>

        </div>
      </div>
    </div>
  )
}