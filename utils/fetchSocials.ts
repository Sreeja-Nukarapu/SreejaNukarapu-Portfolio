import { Social } from "../typings";
export const fetchSocials = async (): Promise<Social[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await res.json();
    return data.socials || [];
  } catch (error) {
    return [];
  }
};
