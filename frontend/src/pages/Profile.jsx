import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, UserRound } from "lucide-react";

const profileFields = [
  { label: "First name", value: "Vedang", name: "firstName" },
  { label: "Last name", value: "Prajapati", name: "lastName" },
  { label: "Phone number", value: "+91 98765 43210", name: "phone" },
  { label: "ZIP code", value: "380001", name: "zip" },
  { label: "City", value: "Ahmedabad", name: "city" },
  {
    label: "Address",
    value: "12 Riverfront Road, Navrangpura",
    name: "address",
    wide: true,
  },
];

const orders = [
  {
    id: "#ORD-1048",
    date: "September 04, 2026",
    items: "3 items",
    total: "$184.00",
    status: "Delivered",
  },
  {
    id: "#ORD-1039",
    date: "August 22, 2026",
    items: "2 items",
    total: "$96.50",
    status: "Shipped",
  },
  {
    id: "#ORD-1027",
    date: "August 08, 2026",
    items: "1 item",
    total: "$49.00",
    status: "Processing",
  },
];

const statusVariants = {
  Delivered: "secondary",
  Shipped: "outline",
  Processing: "default",
};

const Profile = () => {
  return (
    <section className="mx-auto w-full max-w-4xl py-4 sm:py-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-pink-600">
            Account center
          </p>
          <h1 className="font-serif text-3xl font-semibold text-[#4b2d24] sm:text-4xl">
            Welcome back, Vedang
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your personal details and keep track of your purchases.
          </p>
        </div>
        <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-700 sm:flex">
          <UserRound className="h-5 w-5" />
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid h-11 w-full max-w-sm grid-cols-2 bg-[#f3eadc]">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card className="border-amber-950/10 bg-[#fbf8f1] shadow-sm">
            <CardHeader>
              <CardTitle>Personal information</CardTitle>
              <CardDescription>
                Your delivery and contact details are shown below.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5 sm:grid-cols-2">
              {profileFields.map((field) => (
                <div
                  key={field.name}
                  className={field.wide ? "sm:col-span-2" : ""}
                >
                  <Label htmlFor={field.name} className="mb-2">
                    {field.label}
                  </Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.value}
                    readOnly
                    className="bg-white/70"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="mt-6">
          <Card className="border-amber-950/10 bg-[#fbf8f1] shadow-sm">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle>Order history</CardTitle>
                  <CardDescription>
                    A summary of your recent purchases.
                  </CardDescription>
                </div>
                <Package className="mt-1 h-5 w-5 text-pink-600" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="grid gap-3 rounded-lg border border-amber-950/10 bg-white/60 p-4 sm:grid-cols-[1.3fr_1fr_auto] sm:items-center"
                >
                  <div>
                    <p className="font-semibold text-[#4b2d24]">{order.id}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {order.date} · {order.items}
                    </p>
                  </div>
                  <p className="font-medium text-[#4b2d24]">{order.total}</p>
                  <Badge variant={statusVariants[order.status]}>
                    {order.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Profile;
