import * as Text from "@repo/ui/components/ui/text";
import { Layout } from "@/components/layout";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@repo/ui/components/ui/table";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { useQuery } from "@tanstack/react-query";

export default function ContactUs() {
  const { data: businessInfo } = useQuery({
    queryKey: ["businessInfo"],
    queryFn: () =>
      fetch("https://api.example.com/business").then((res) => res.json()),
  });

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <Text.Heading size={"xl"}>Contact Us</Text.Heading>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3 border rounded-lg bg-background p-4 flex-1">
            <Text.Heading size="md">General Details</Text.Heading>

            <Table>
              <TableBody>
                {businessInfo?.name && (
                  <TableRow>
                    <TableCell className="md:w-1/4 w-1/2 font-bold">
                      Address
                    </TableCell>
                    <TableCell>{businessInfo.address}</TableCell>
                  </TableRow>
                )}
                {businessInfo?.phone && (
                  <TableRow>
                    <TableCell className="md:w-1/4 w-1/2 font-bold">
                      Phone
                    </TableCell>
                    <TableCell>{businessInfo.phone}</TableCell>
                  </TableRow>
                )}
                {businessInfo?.email && (
                  <TableRow>
                    <TableCell className="md:w-1/4 w-1/2 font-bold">
                      Email
                    </TableCell>
                    <TableCell>
                      <a
                        href="mailto:info@madinsonhandyman.com"
                        className="text"
                      >
                        info@madinsonhandyman.com
                      </a>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col gap-3 border rounded-lg bg-background p-4 flex-1 order-last md:order-none">
            <Text.Heading size="md">Social Media</Text.Heading>
            <div className="flex gap-1">
              {businessInfo?.socialMedia.map(({ name, url }) => (
                <Button
                  variant="ghost"
                  size="md"
                  key={name}
                  onClick={() => window.open(url, "_blank")}
                >
                  {name === "Facebook" && <Facebook className="h-4 w-4" />}
                  {name === "Instagram" && <Instagram className="h-4 w-4" />}
                  {name === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                  {name === "Twitter" && <Twitter className="h-4 w-4" />}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 border rounded-lg bg-background p-4 flex-1 col-span-1 order-1 md:order-none">
            <Text.Heading size="md">Hours</Text.Heading>
            <Table>
              <TableBody>
                {businessInfo?.hours.map(({ day, hours }) => (
                  <TableRow key={day}>
                    <TableCell className="md:w-1/4 w-1/2 font-bold">
                      {day}
                    </TableCell>
                    <TableCell>{hours}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
