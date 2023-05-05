export class IssueService {
  #throwIfUndefined = this.assertIfPropertyIsDefined();

  constructor(private readonly property: string) {}

  assertIfPropertyIsDefined() {
    if (!this.property) {
      throw new Error('the property should be defined');
    }
  }
}
