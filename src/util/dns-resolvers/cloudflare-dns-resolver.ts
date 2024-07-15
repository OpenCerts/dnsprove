import axios from "axios";
import { CustomDnsResolver } from "../../index";

export const cloudflareDnsResolver: CustomDnsResolver = async (domain) => {
  const { data } = await axios({
    method: "GET",
    url: `https://cloudflare-dns.com/dns-query?name=${domain}&type=TXT`,
    headers: { accept: "application/dns-json", contentType: "application/json", connection: "keep-alive" },
  });
  return data;
};
