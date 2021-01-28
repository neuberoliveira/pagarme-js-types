declare module 'pagarme' {
  export namespace client {
    function connect(authentication: {api_key: string}): Promise<Resources>

    function search(opts: any, query: any): any

    function status(opts: any): any

    function versions(opts: any): any
  }

  export interface RequestError {
    name: string
    method: string
    url: string
    status: number
    response: {
      errors: {
        type: string
        parameter_name: string
        message: string
      }[]
    }
  }

  export interface Resources {
    acquirers: {
      all: (opts: any, pagination: any) => any
      create: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
      findAll: (a0: any, a1: any, ...args: any[]) => any
      update: (opts: any, body: any) => any
    }

    acquirersConfigurations: {
      all: (opts: any, pagination: any) => any
      create: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
      findAll: (a0: any, a1: any, ...args: any[]) => any
      update: (opts: any, body: any) => any
    }

    antifraudAnalyses: {
      create: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
    }

    balance: {
      find: (opts: BalanceFindInput) => Promise<BalanceObject>
      primary: (opts: any) => any
    }

    balanceOperations: {
      all: (arg: FindAllBalanceOperations) => Promise<BalanceOperation>
      days: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
    }

    bankAccounts: {
      all: (opts: any, body: any) => any
      create: (opts: CreateContaBancaria) => Promise<ContaBancaria>
      find: (opts: any) => Promise<ContaBancaria>
    }

    bulkAnticipations: {
      all: (opts: any, body: any) => any
      cancel: (opts: any, body: any) => any
      confirm: (opts: any, body: any) => any
      create: (opts: any, body: any) => any
      days: (opts: any, body: any) => any
      destroy: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
      limits: (opts: any, body: any) => any
      update: (opts: any, body: any) => any
    }

    cards: {
      all: (opts: any, pagination: any) => any
      create: (body: CardCreateInput) => any
      find: (opts: any, body: any) => any
    }

    chargebackOperations: {
      find: (a0: any, a1: any, ...args: any[]) => any
    }

    chargebacks: {
      find: (opts: any, query: any) => any
    }

    company: {
      activate: (opts: any) => any
      affiliationProgress: (opts: any) => any
      create: (opts: any, body: any) => any
      createTemporary: (opts: any, body: any) => any
      current: (opts: any) => any
      resetKeys: (opts: any) => any
      update: (opts: any, body: any) => any
      updateBranding: (opts: any, body: any) => any
      emailTemplates: {
        find: (opts: any, body: any) => any
        update: (opts: any, body: any) => any
      }
    }

    customers: {
      all: (opts: any, body: any) => any
      create: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
    }

    events: {
      find: (opts: any, body: any) => any
      findCustom: (opts: any, body: any) => any
    }

    gatewayOperations: {
      find: (opts: any, body: any) => any
      refuseMessage: (opts: any, body: any) => any
    }

    invites: {
      all: (opts: any) => any
      create: (opts: any, body: any) => any
      destroy: (opts: any, body: any) => any
      find: (opts: any, ...args: any[]) => any
    }

    orders: {
      all: (opts: any, body: any) => any
    }

    payables: {
      all: (args: FindRecebiveisArgs) => Promise<Recebivel[]>
      days: (opts: any, body: any) => any
      find: (opts: FindRecebivelArg) => Promise<Recebivel[]>
    }

    paymentLinks: {
      all: (opts: any, body: any) => any
      cancel: (opts: any, body: any) => any
      create: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
    }

    plans: {
      all: (opts: any, pagination: any) => any
      create: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
      findAll: (a0: any, a1: any, ...args: any[]) => any
      update: (opts: any, body: any) => any
    }

    postbacks: {
      find: (opts: any, body: any) => any
      redeliver: (opts: any, body: any) => any
    }

    recipients: {
      all: (opts: any, body: any) => any
      create: (opts: CreateRecebedor) => Promise<Recebedor>
      find: (opts: any) => any
      update: (opts: UpdateRecebedor) => Promise<Recebedor>
    }

    reprocessedTransactions: {
      find: (opts: any, query: any) => any
    }

    security: {
      encrypt: (opts: any, card: any) => any
      sign: (opts: any, string: any) => any
      verify: (opts: any, string: any, expected: any) => any
    }

    session: {
      create: (opts: any, email: any, password: any) => any
      destroy: (opts: any, id: any) => any
      verify: (opts: any, payload: any) => any
    }

    splitRules: {
      find: (opts: any, body: any) => any
    }

    subscriptions: {
      all: (opts: any, body: any) => any
      cancel: (opts: any, body: any) => any
      create: (opts: any, body: any) => any
      createTransaction: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
      findAll: (a0: any, a1: any, ...args: any[]) => any
      findTransactions: (opts: any, body: any) => any
      settleCharge: (opts: any, body: any) => any
      update: (opts: any, body: any) => any
    }

    transactions: {
      all: (opts: any, body: any) => any
      calculateInstallmentsAmount: (opts: any, body: any) => any
      capture: (opts: CaptureArgs) => Promise<TransacaoObject>
      cardHashKey: (opts: any) => any
      collectPayment: (opts: any, body: any) => any
      create: (opts: CreateTransacaoInput) => Promise<TransacaoObject>
      find: (opts: any, body: any) => any
      refund: (args: EstornoArgs) => Promise<TransacaoObject>
      reprocess: (opts: any, body: any) => any
      update: (opts: any, body: any) => any
    }

    transfers: {
      all: (args: FindAllTransfersArgs) => Promise<TransferenciaObject[]>
      cancel: (opts: any, body: any) => any
      create: (opts: TransferenciaInput) => Promise<TransferenciaObject>
      days: (opts: any) => any
      find: (opts: any, body: any) => any
      limits: (opts: any, params: any) => any
    }

    user: {
      all: (opts: any, body: any) => any
      create: (opts: any, body: any) => any
      current: (opts: any) => any
      destroy: (opts: any, body: any) => any
      find: (opts: any, body: any) => any
      redefinePassword: (opts: any, body: any) => any
      resetPassword: (opts: any, body: any) => any
      update: (opts: any, body: any) => any
      updatePassword: (opts: any, body: any) => any
    }

    zipcodes: {
      find: (a0: any, a1: any, ...args: any[]) => any
    }
  }

  // TO GERANDO

  export interface Authentication {
    api_key: string
  }

  export interface Document {
    type: string
    number: string
  }

  export interface CustomerInput {
    id?: string
    external_id: string
    name: string
    type: string
    country: string
    email: string
    documents: Document[]
    phone_numbers: string[]
    birthday?: string
  }

  export interface Address {
    country: string
    state: string
    city: string
    neighborhood?: string
    street: string
    street_number: string
    zipcode: string
    complementary?: string
  }

  export interface BillingInput {
    name: string
    address: Address
  }

  export interface Address2 {
    country: string
    state: string
    city: string
    neighborhood: string
    street: string
    street_number: string
    zipcode: string
  }

  export interface ShippingInput {
    name: string
    fee: number
    delivery_date: string
    expedited: boolean
    address: Address2
  }

  export interface ItemInput {
    id: string
    title: string
    unit_price: number
    quantity: number
    tangible: boolean
    category?: string
    venue?: string
    date?: string
  }

  export interface CreateTransacaoInput {
    amount: number
    card_hash?: string
    card_id?: string
    async?: boolean
    soft_descriptor?: string
    installments?: string
    payment_method: string
    customer: CustomerInput
    capture: boolean
    billing: BillingInput
    shipping?: ShippingInput
    items: ItemInput[]
    metadata: object
  }

  // CONTA BANCARIA

  export interface CreateContaBancaria {
    agencia: string
    agencia_dv?: string
    bank_code: string
    conta: string
    conta_dv: string
    document_number: string
    type: 'conta_corrente' | 'conta_poupanca' | 'conta_corrente_conjunta' | 'conta_poupanca_conjunta'
    legal_name: string
  }

  export interface ContaBancaria {
    object: string
    id: number
    bank_code: string
    agencia: string
    agencia_dv: string
    conta: string
    conta_dv: string
    type: 'conta_corrente' | 'conta_poupanca' | 'conta_corrente_conjunta' | 'conta_poupanca_conjunta'
    document_type: string
    document_number: string
    legal_name: string
    charge_transfer_fees: boolean
    date_created: Date
  }

  export interface PhoneNumber {
    ddd: string
    number: string
    type: string
  }

  export interface RegisterInformationInput {
    type: 'individual'
    document_number: string
    name: string
    site_url?: string
    email: string
    phone_numbers?: PhoneNumber[]
  }

  export interface CreateRecebedor {
    transfer_interval: string
    transfer_day: number
    transfer_enabled: boolean
    bank_account_id?: string
    anticipatable_volume_percentage?: number
    automatic_anticipation_enabled?: boolean
    postback_url?: string
    register_information?: RegisterInformationInput
  }
  type UpdateRecebedor = {
    recipient_id: string
  } & Partial<CreateRecebedor>

  export interface BankAccount {
    object: string
    id: number
    bank_code: string
    agencia: string
    agencia_dv?: any
    conta: string
    conta_dv: string
    type: string
    document_type: string
    document_number: string
    legal_name: string
    charge_transfer_fees: boolean
    date_created: Date
  }

  interface SplitRuleArg {
    liable: boolean
    charge_processing_fee: boolean
    amount: number
    recipient_id: string
  }

  export interface Recebedor {
    object: string
    id: string
    transfer_enabled: boolean
    last_transfer?: any
    transfer_interval: string
    transfer_day: number
    automatic_anticipation_enabled: boolean
    anticipatable_volume_percentage: number
    date_created: Date
    date_updated: Date
    postback_url: string
    status: string
    status_reason?: any
    metadata?: any
    bank_account: BankAccount
  }

  interface CaptureArgs {
    id: string
    amount: number
    split_rules?: SplitRuleArg[]
  }

  interface TransacaoObject {
    object: 'transaction'
    status: 'processing' | 'authorized' | 'paid' | 'refunded' | 'waiting_payment' | 'pending_refund' | 'refused'
    refuse_reason?: 'acquirer' | 'antifraud' | 'internal_error' | 'no_acquirer' | 'acquirer_timeout'
    date_created: string
    authorized_amount: string | number
    id: number | string
    cost: number | string
    reference_key: string
    tid: number
    amount: number
  }

  interface Recebivel {
    object: 'payable'
    id: number | string
    status: 'waiting_funds' | 'prepaid' | 'paid' | 'suspended'
    amount: string
    fee: string
    anticipation_fee?: number | string
    installment: number | string
    transaction_id: number | string
    split_rule_id: string
    bulk_anticipation_id?: string
    recipient_id: string
    payment_date: string
    original_payment_date: string
    type: 'credit' | 'refund' | 'refund_reversal' | 'chargeback' | 'chargeback_refund' | 'block' | 'unblock'
    payment_method: 'credit_card' | 'debit_card' | 'boleto'
    accrual_date: string
    date_created: string
  }

  interface FindRecebivelArg {
    transaction_id: string
  }

  interface FindRecebiveisArgs {
    createdAt?: string
    amount?: string
    recipient_id?: string
    status?: 'paid' | 'waiting_funds'
    installment?: string
    transaction_id?: string
    payment_date?: string
    type?: 'chargeback' | 'refund' | 'chargeback_refund' | 'credit'
    id?: string
    count: number
    page: number
  }

  interface TransferenciaInput {
    amount: string
    recipientId: string
    metaData?: JSON
  }

  interface TransferenciaObject {
    object: 'transfer'
    Id: number | string
    Amount: number | string
    Type: 'ted' | 'doc' | 'credito_em_conta'
    Status: 'pending_transfer' | 'transferred' | 'failed' | 'processing' | 'canceled'
    Fee: number | string
    Funding_date: string
    Funding_estimated_date: string
    transaction_id: number | string
    Bank_account: ContaBancaria
    Date_created: string
    metadata: JSON
  }

  interface FindAllTransfersArgs {
    count: number
    page: number
    bank_account_id?: string
    amount?: string
    recipient_id?: string
    id?: string
    date_created?: string
    created_at?: string
  }

  interface BalanceFindInput {
    recipientId: string
  }

  interface BalanceObject {
    object: 'balance'
    waiting_funds: {amount: number | string}
    available: {amount: number | string}
    transferred: {amount: number | string}
  }

  interface BalanceOperation {
    Object: 'balance_operation'
    id: string
    status: 'waiting_funds' | 'available' | 'transferred'
    balance_amount: number
    type: 'payable' | 'anticipation' | 'transfer'
    amount: number
    fee: number
    date_created: string
    movement_object: TransferenciaObject | Recebivel
  }

  interface FindAllBalanceOperations {
    count: number
    page: number
    status?: 'waiting_funds' | 'available' | 'transferred'
    start_date?: number
    end_date?: number
  }

  interface EstornoArgs {
    id: number
  }

  interface CardCreateInput {
    card_holder_name: string
    card_expiration_date: string
    card_number: string
    card_cvv: string
  }
}
