import { abi as ERC20 } from '../../contracts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json'
import { abi as FundingRoundFactory } from '../../contracts/contracts/FundingRoundFactory.sol/FundingRoundFactory.json'
import { abi as FundingRound } from '../../contracts/contracts/FundingRound.sol/FundingRound.json'
import { abi as MACI } from '../../contracts/maci-contracts/sol/MACI.sol/MACI.json'
import { abi as UserRegistry } from '../../contracts/contracts/userRegistry/IUserRegistry.sol/IUserRegistry.json'
import { abi as BrightIdUserRegistry } from '../../contracts/contracts/userRegistry/BrightIdUserRegistry.sol/BrightIdUserRegistry.json'
import { abi as SimpleRecipientRegistry } from '../../contracts/contracts/recipientRegistry/SimpleRecipientRegistry.sol/SimpleRecipientRegistry.json'
import { abi as OptimisticRecipientRegistry } from '../../contracts/contracts/recipientRegistry/OptimisticRecipientRegistry.sol/OptimisticRecipientRegistry.json'
import { abi as KlerosGTCR } from '../../contracts/contracts/recipientRegistry/IKlerosGTCR.sol/IKlerosGTCR.json'
import { abi as KlerosGTCRAdapter } from '../../contracts/contracts/recipientRegistry/KlerosGTCRAdapter.sol/KlerosGTCRAdapter.json'

export {
  ERC20,
  FundingRoundFactory,
  FundingRound,
  MACI,
  UserRegistry,
  BrightIdUserRegistry,
  SimpleRecipientRegistry,
  OptimisticRecipientRegistry,
  KlerosGTCR,
  KlerosGTCRAdapter,
}
