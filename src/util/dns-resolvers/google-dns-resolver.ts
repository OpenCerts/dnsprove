import axios from "axios";
import { CustomDnsResolver } from "../../index";

export const googleDnsResolver: CustomDnsResolver = async (domain) => {
  const { data } = await axios({
    method: "GET",
    url: `https://dns.google/resolve?name=${domain}&type=TXT`,
  });

  return data;
};
