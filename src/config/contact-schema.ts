// cannot use zod's infer or enum as named export
// since both are reserved symbols
import {
  email,
  object,
  string,
  enum as zenum,
  type infer as zinfer,
} from "zod";
import { PACKAGES } from "./content";

const PAKCAGE_IDS = PACKAGES.map((p) => p.id);

export const CONTACT_SCHEMA = object({
  emailAddress: email({ error: "Please enter a valid email address." }),
  package: zenum(PAKCAGE_IDS, {
    error: "Please select a valid package.",
  }),
  description: string().max(1000, "Max. 1000 chars allowed.").optional(),
});

export type ContactSchema = zinfer<typeof CONTACT_SCHEMA>;
