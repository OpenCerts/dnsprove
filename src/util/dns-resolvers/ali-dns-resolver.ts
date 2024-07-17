import axios from "axios";
import { CustomDnsResolver } from "../..";

export const aliDnsResolver: CustomDnsResolver = async (domain) => {
  const { data } = await axios({
    method: "GET",
    url: `https://dns.alidns.com/resolve?name=${domain}&type=16`,
  });

  return data;
};
