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

const branchA = new BankBranch ({ name: "BNF Branch", address: "27, Melrose Arch, The High St, Sandton, Johannesburg, 2196" });
const branchB = new BankBranch ({ name: "ASBA", address: "21 Cradock Ave, Rosebank, Johannesburg, 2196" });