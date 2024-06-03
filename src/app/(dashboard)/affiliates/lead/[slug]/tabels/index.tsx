import * as z from "zod";
import { Row, Table, createColumnHelper } from "@tanstack/react-table";

export const promotedBrandsSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type PromotedBrand = z.infer<typeof promotedBrandsSchema>;

const promotedProductSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type PromotedProduct = z.infer<typeof promotedProductSchema>;

const brandsColumnHelper = createColumnHelper<PromotedBrand>();
const productsColumnHelper = createColumnHelper<PromotedProduct>();

export const brandsTableColumns = [
  brandsColumnHelper.accessor("name", {
    header: "",
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.()}
        </div>
      );
    },
  }),
  brandsColumnHelper.accessor("id", {
    header: "",
    cell: (cell) => {
      return (
        <button className="    3xl:w-[214px] w-[190px] ml-auto h-[26px] flex items-center justify-center text-yellow-900 border border-black-900 hover:text-white-A700 hover:border-transparent hover:bg-yellow-900 rounded-lg ">
          Campaign Ad Group Link
        </button>
      );
    },
  }),
];
export const productsTableColumns = [
  productsColumnHelper.accessor("name", {
    header: "",
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.()}
        </div>
      );
    },
  }),
  brandsColumnHelper.accessor("id", {
    header: "",
    cell: (cell) => {
      return (
        <button className="    3xl:w-[214px] w-[190px] ml-auto h-[26px] flex items-center justify-center text-yellow-900 border border-black-900 hover:text-white-A700 hover:border-transparent hover:bg-yellow-900 rounded-lg ">
          Campaign Ad Group Link
        </button>
      );
    },
  }),
];

export const brandsData: PromotedBrand[] = [
  { id: "1", name: "ORCA" },
  { id: "2", name: "Natural Glo" },
  { id: "3", name: "Hideaway Murphy Beds" },
  { id: "4", name: "Dreamcatcher" },
  { id: "5", name: "Pineapple" },
  { id: "6", name: "Belle" },
  { id: "7", name: "Alpha" },
  { id: "8", name: "Beta" },
  { id: "9", name: "Gamma" },
  { id: "10", name: "Delta" },
  { id: "11", name: "Epsilon" },
  { id: "12", name: "Zeta" },
  { id: "13", name: "Eta" },
  { id: "14", name: "Theta" },
  { id: "15", name: "Iota" },
  { id: "16", name: "Kappa" },
  { id: "17", name: "Lambda" },
  { id: "18", name: "Mu" },
  { id: "19", name: "Nu" },
  { id: "20", name: "Xi" },
  { id: "21", name: "Omicron" },
  { id: "22", name: "Pi" },
  { id: "23", name: "Rho" },
  { id: "24", name: "Sigma" },
  { id: "25", name: "Tau" },
  { id: "26", name: "Upsilon" },
  { id: "27", name: "Phi" },
  { id: "28", name: "Chi" },
  { id: "29", name: "Psi" },
  { id: "30", name: "Omega" },
  { id: "31", name: "Acme" },
  { id: "32", name: "Globex" },
  { id: "33", name: "Initech" },
  { id: "34", name: "Umbrella" },
  { id: "35", name: "Soylent" },
  { id: "36", name: "Vehement" },
  { id: "37", name: "Hooli" },
  { id: "38", name: "Massive" },
  { id: "39", name: "Oscorp" },
  { id: "40", name: "Stark" },
  { id: "41", name: "Wayne" },
  { id: "42", name: "LexCorp" },
  { id: "43", name: "Cyberdyne" },
  { id: "44", name: "Dunder" },
  { id: "45", name: "Gekko" },
  { id: "46", name: "Genco" },
  { id: "47", name: "Wonka" },
  { id: "48", name: "Prestige" },
  { id: "49", name: "Barnum" },
  { id: "50", name: "Slate" },
  { id: "51", name: "Zorg" },
  { id: "52", name: "Weyland" },
  { id: "53", name: "MomCorp" },
  { id: "54", name: "Vandelay" },
  { id: "55", name: "Virtucon" },
  { id: "56", name: "Sirius" },
  { id: "57", name: "Stagg" },
];

export const productsData: PromotedBrand[] = [
  { id: "1", name: "Bulk Flip Flops" },
  { id: "2", name: "Fireplace logos" },
  { id: "3", name: "Bed Kits" },
  { id: "4", name: "Giant Checks" },
  { id: "5", name: "Widgets" },
  { id: "6", name: "Gadgets" },
  { id: "7", name: "Doohickeys" },
  { id: "8", name: "Thingamajigs" },
  { id: "9", name: "Whatchamacallits" },
  { id: "10", name: "Doodads" },
  { id: "11", name: "Gizmos" },
  { id: "12", name: "Contraptions" },
  { id: "13", name: "Devices" },
  { id: "14", name: "Appliances" },
  { id: "15", name: "Tools" },
  { id: "16", name: "Instruments" },
  { id: "17", name: "Implements" },
  { id: "18", name: "Apparatuses" },
  { id: "19", name: "Machines" },
  { id: "20", name: "Equipments" },
  { id: "21", name: "Accoutrements" },
  { id: "22", name: "Accessories" },
  { id: "23", name: "Aids" },
  { id: "24", name: "Attachments" },
  { id: "25", name: "Furnishings" },
  { id: "26", name: "Fixtures" },
  { id: "27", name: "Furniture" },
  { id: "28", name: "Fittings" },
  { id: "29", name: "Materials" },
  { id: "30", name: "Supplies" },
  { id: "31", name: "Provisions" },
  { id: "32", name: "Resources" },
  { id: "33", name: "Utilities" },
  { id: "34", name: "Assets" },
  { id: "35", name: "Goods" },
  { id: "36", name: "Merchandise" },
  { id: "37", name: "Commodities" },
  { id: "38", name: "Articles" },
  { id: "39", name: "Products" },
  { id: "40", name: "Items" },
  { id: "41", name: "Units" },
  { id: "42", name: "Objects" },
  { id: "43", name: "Components" },
  { id: "44", name: "Parts" },
  { id: "45", name: "Pieces" },
  { id: "46", name: "Elements" },
  { id: "47", name: "Modules" },
  { id: "48", name: "Sections" },
  { id: "49", name: "Segments" },
  { id: "50", name: "Divisions" },
  { id: "51", name: "Fragments" },
  { id: "52", name: "Portions" },
  { id: "53", name: "Shares" },
  { id: "54", name: "Quotas" },
  { id: "55", name: "Allowances" },
  { id: "56", name: "Allocations" },
  { id: "57", name: "Distributions" },
];
