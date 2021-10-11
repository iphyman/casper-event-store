import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Block = {
  __typename?: "Block";
  accumulatedSeed: Scalars["String"];
  blockHash: Scalars["String"];
  bodyHash: Scalars["String"];
  deploys?: Maybe<Array<Maybe<Deploy>>>;
  eraId: Scalars["String"];
  height: Scalars["String"];
  parentHash: Scalars["String"];
  proposer: Scalars["String"];
  state: Scalars["String"];
  timestamp: Scalars["String"];
};

export type Deploy = {
  __typename?: "Deploy";
  account: Scalars["String"];
  cost: Scalars["String"];
  deployHash: Scalars["String"];
  state: Scalars["String"];
};

export enum FindBlockBy {
  Account = "ACCOUNT",
  Blockhash = "BLOCKHASH",
  Blockheight = "BLOCKHEIGHT",
  Deployhash = "DEPLOYHASH"
}

export type Query = {
  __typename?: "Query";
  _empty?: Maybe<Scalars["String"]>;
  block?: Maybe<Block>;
  blocks?: Maybe<Array<Maybe<Block>>>;
};

export type QueryBlockArgs = {
  search: Scalars["String"];
  searchBy: FindBlockBy;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Block: ResolverTypeWrapper<Block>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Deploy: ResolverTypeWrapper<Deploy>;
  FindBlockBy: FindBlockBy;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Block: Block;
  Boolean: Scalars["Boolean"];
  Deploy: Deploy;
  Query: {};
  String: Scalars["String"];
};

export type BlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Block"] = ResolversParentTypes["Block"]
> = {
  accumulatedSeed?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  blockHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bodyHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deploys?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Deploy"]>>>,
    ParentType,
    ContextType
  >;
  eraId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  height?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  parentHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  state?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeployResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Deploy"] = ResolversParentTypes["Deploy"]
> = {
  account?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deployHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  state?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  _empty?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block?: Resolver<
    Maybe<ResolversTypes["Block"]>,
    ParentType,
    ContextType,
    RequireFields<QueryBlockArgs, "search" | "searchBy">
  >;
  blocks?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Block"]>>>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Block?: BlockResolvers<ContextType>;
  Deploy?: DeployResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
