import { BaseTriggerResponse } from "./base_response.ts";
import { BaseTrigger, RequiredInputs, TriggerTypes } from "./mod.ts";
import { FilterType } from "./trigger-filter.ts";

export type WebhookTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof TriggerTypes.Webhook;
    webhook?: {
      /** @description Defines the condition in which this webhook trigger should execute the Workflow */
      filter?: FilterType;
    };
  };

export type WebhookResponse = BaseTriggerResponse;
