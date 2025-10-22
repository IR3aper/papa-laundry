import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutCard(props) {
  return(
      <Link href={props.link}>
            <Card
              className="bg-white border border-[#BFE7E0]/50 rounded-2xl shadow-md hover:shadow-lg hover:border-[#3A5A66]/40 hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between"
            >
              <CardHeader>
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="relative">
                    <img
                      src={props.image}
                      alt={props.name}
                      className="w-50 h-50 rounded-full object-cover border-4 border-[#BFE7E0] shadow-md"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-[#1a6e6b]">
                    {props.name}
                  </h2>
                  <p className="text-sm text-[#3A5A66] font-medium">
                    {props.role}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow justify-between text-center px-6 pb-6">

                <p className="text-[#BFA87F] font-semibold italic mb-5">
                  {props.motto}
                </p>
              </CardContent>
            </Card>
          </Link>


  )
}


