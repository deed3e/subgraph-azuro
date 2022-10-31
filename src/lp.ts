import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  AzuroBetChanged as AzuroBetChangedEvent,
  BetterWin as BetterWinEvent,
  ClaimTimeoutChanged as ClaimTimeoutChangedEvent,
  DaoRewardChanged as DaoRewardChangedEvent,
  lpInitialized as lpInitializedEvent,
  LiquidityAdded as LiquidityAddedEvent,
  LiquidityRemoved as LiquidityRemovedEvent,
  LiquidityRequested as LiquidityRequestedEvent,
  MinDepoChanged as MinDepoChangedEvent,
  NewBet as NewBetEvent,
  OracleRewardChanged as OracleRewardChangedEvent,
  lpOwnershipTransferred as lpOwnershipTransferredEvent,
  PeriodChanged as PeriodChangedEvent,
  ReinforcementAbilityChanged as ReinforcementAbilityChangedEvent,
  Transfer as TransferEvent,
  WithdrawTimeoutChanged as WithdrawTimeoutChangedEvent,
  coreChanged as coreChangedEvent
} from "../generated/lp/lp"
import {
  Approval,
  ApprovalForAll,
  AzuroBetChanged,
  BetterWin,
  ClaimTimeoutChanged,
  DaoRewardChanged,
  lpInitialized,
  LiquidityAdded,
  LiquidityRemoved,
  LiquidityRequested,
  MinDepoChanged,
  NewBet,
  OracleRewardChanged,
  lpOwnershipTransferred,
  PeriodChanged,
  ReinforcementAbilityChanged,
  Transfer,
  WithdrawTimeoutChanged,
  coreChanged
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleAzuroBetChanged(event: AzuroBetChangedEvent): void {
  let entity = new AzuroBetChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newAzuroBet = event.params.newAzuroBet
  entity.save()
}

export function handleBetterWin(event: BetterWinEvent): void {
  let entity = new BetterWin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.better = event.params.better
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.save()
}

export function handleClaimTimeoutChanged(
  event: ClaimTimeoutChangedEvent
): void {
  let entity = new ClaimTimeoutChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newClaimTimeout = event.params.newClaimTimeout
  entity.save()
}

export function handleDaoRewardChanged(event: DaoRewardChangedEvent): void {
  let entity = new DaoRewardChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newDaoFee = event.params.newDaoFee
  entity.save()
}

export function handlelpInitialized(event: lpInitializedEvent): void {
  let entity = new lpInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleLiquidityAdded(event: LiquidityAddedEvent): void {
  let entity = new LiquidityAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.amount = event.params.amount
  entity.leaf = event.params.leaf
  entity.save()
}

export function handleLiquidityRemoved(event: LiquidityRemovedEvent): void {
  let entity = new LiquidityRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.leaf = event.params.leaf
  entity.amount = event.params.amount
  entity.save()
}

export function handleLiquidityRequested(event: LiquidityRequestedEvent): void {
  let entity = new LiquidityRequested(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestWallet = event.params.requestWallet
  entity.requestedValueLp = event.params.requestedValueLp
  entity.save()
}

export function handleMinDepoChanged(event: MinDepoChangedEvent): void {
  let entity = new MinDepoChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newMinDepo = event.params.newMinDepo
  entity.save()
}

export function handleNewBet(event: NewBetEvent): void {
  let entity = new NewBet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.betId = event.params.betId
  entity.conditionId = event.params.conditionId
  entity.outcomeId = event.params.outcomeId
  entity.amount = event.params.amount
  entity.odds = event.params.odds
  entity.fund1 = event.params.fund1
  entity.fund2 = event.params.fund2
  entity.save()
}

export function handleOracleRewardChanged(
  event: OracleRewardChangedEvent
): void {
  let entity = new OracleRewardChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newOracleFee = event.params.newOracleFee
  entity.save()
}

export function handlelpOwnershipTransferred(
  event: lpOwnershipTransferredEvent
): void {
  let entity = new lpOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePeriodChanged(event: PeriodChangedEvent): void {
  let entity = new PeriodChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newPeriod = event.params.newPeriod
  entity.save()
}

export function handleReinforcementAbilityChanged(
  event: ReinforcementAbilityChangedEvent
): void {
  let entity = new ReinforcementAbilityChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newReinforcementAbility = event.params.newReinforcementAbility
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleWithdrawTimeoutChanged(
  event: WithdrawTimeoutChangedEvent
): void {
  let entity = new WithdrawTimeoutChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newWithdrawTimeout = event.params.newWithdrawTimeout
  entity.save()
}

export function handlecoreChanged(event: coreChangedEvent): void {
  let entity = new coreChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newCore = event.params.newCore
  entity.save()
}
