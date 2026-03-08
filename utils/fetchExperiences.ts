import { Experience } from "../typings";
export const fetchExperience = async (): Promise<Experience[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const data = await res.json();
    return data.experiences || [];
  } catch (error) {
    return [];
  }
};
