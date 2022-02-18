type Area = {
  caption: string;
  shortCaption: string;
  code: string;
  regions: Array<Region>;
};
type Region = {
  code: string;
  caption: string;
};
export type Geo = Array<Area>;

type Country = {
  caption: string;
  value: number;
};
type DistrictItem = Country & {
  code: string;
  subitems: Country;
};
type Districts = Array<DistrictItem>;
type Regions = Array<DistrictItem>;
type Year = {
  country: Country;
  districts: Districts;
  regions: Regions;
};
export type Incomings = {
  '2019': Year;
  '2020': Year;
};
