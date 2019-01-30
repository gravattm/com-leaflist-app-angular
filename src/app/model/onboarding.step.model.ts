export class OnboardingStep {
  constructor(
    public label: string,
    public segmentId: string,
    public canSkip: boolean
  ) { }
}
