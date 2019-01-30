export class ExperienceData {
  constructor(
    public organisation: string,
    public title: string,
    public responsibilities: string,
    public startMonth: string,
    public startYear: string,
    public endMonth: string,
    public endYear: string,
    public isPresent: boolean,
    public address: string,
    public country: string,
    public state: string,
    public isCanabiesRelated: boolean,
    public isCurrent: boolean,
    public logo: string
  ) { }
}
