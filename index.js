let bankBranchInstance = null; 

class BankBranch {
  constructor(branchInfo) {
    if (bankBranchInstance === null) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    return bankBranchInstance;
  }
  getBranchInfo() {
    return this.branchInfo;
  }
}