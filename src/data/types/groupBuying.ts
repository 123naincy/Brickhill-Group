export type Participation = {
  id: string;
  property_id: string;
  participant_name: string;
  participant_email: string;
  investment_amount: number;
  created_at: string;
};

export type Property = {
  id: string;
  title: string;
  description: string;
  location: string;
  image_url: string;

  total_price: number;
  project_sizes: string[];

  min_participants: number;
  max_participants: number;
  deadline: string;
  status: "open" | "closed" | string;
  created_at: string;
};

export type GroupBuyingData = {
  properties: Property[];
  participations: Participation[];
};
