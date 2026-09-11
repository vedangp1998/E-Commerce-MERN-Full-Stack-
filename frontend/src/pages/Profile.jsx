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
import { Package, UserRound, Pencil, Save, X, Camera } from "lucide-react";
import { useState } from "react";

const initialUser = {
  firstName: "Vedang",
  lastName: "Prajapati",
  email: "vedang@example.com",
  phoneNo: "+91 98765 43210",
  zipCode: "452007",
  city: "Ahmedabad",
  address: "12 Riverfront Road, Navrangpura",
  profilePic: "",
};

const profileFields = [
  {
    label: "First name",
    name: "firstName",
    type: "text",
  },
  {
    label: "Last name",
    name: "lastName",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Phone number",
    name: "phoneNo",
    type: "tel",
  },
  {
    label: "ZIP code",
    name: "zipCode",
    type: "text",
  },
  {
    label: "City",
    name: "city",
    type: "text",
  },
  {
    label: "Address",
    name: "address",
    type: "text",
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
  const [user, setUser] = useState(initialUser);
  const [editUser, setEditUser] = useState(initialUser);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setEditUser(user);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUser(editUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditUser(user);
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setEditUser((prev) => ({
      ...prev,
      profilePic: imageUrl,
    }));
  };

  return (
    <section className="mx-auto w-full max-w-4xl py-4 sm:py-8">
      {/* Header */}

      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-pink-600">
            Account center
          </p>

          <h1 className="font-serif text-3xl font-semibold text-[#4b2d24] sm:text-4xl">
            Welcome back, {user.firstName}
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Manage your personal details and keep track of your purchases.
          </p>
        </div>

        <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-700 sm:flex">
          <UserRound className="h-5 w-5" />
        </div>
      </div>

      {/* Tabs */}

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid h-11 w-full max-w-sm grid-cols-2 bg-[#f3eadc]">
          <TabsTrigger value="profile">Profile</TabsTrigger>

          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}

        <TabsContent value="profile" className="mt-6">
          <Card className="border-amber-950/10 bg-[#fbf8f1] shadow-sm">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle>Personal information</CardTitle>

                  <CardDescription>
                    Your delivery and contact details are shown below.
                  </CardDescription>
                </div>

                {!isEditing && (
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="flex items-center gap-2 rounded-lg border border-amber-950/10 bg-white px-4 py-2 text-sm font-medium text-[#4b2d24] shadow-sm transition-all hover:bg-[#f3eadc] hover:shadow"
                  >
                    <Pencil className="h-4 w-4" />
                    Edit
                  </button>
                )}
              </div>
            </CardHeader>

            <CardContent>
              {/* Profile Image */}

              <div className="mb-7 flex items-center gap-5">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-pink-100 shadow-md">
                    {editUser.profilePic ? (
                      <img
                        src={editUser.profilePic}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <UserRound className="h-10 w-10 text-pink-700" />
                    )}
                  </div>

                  {isEditing && (
                    <label
                      htmlFor="profile-picture"
                      className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-pink-600 text-white shadow-md transition hover:bg-pink-700"
                    >
                      <Camera className="h-4 w-4" />

                      <input
                        id="profile-picture"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                <div>
                  <p className="font-medium text-[#4b2d24]">
                    {user.firstName} {user.lastName}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.email}
                  </p>

                  {isEditing && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Click the camera icon to change your photo.
                    </p>
                  )}
                </div>
              </div>

              {/* Form */}

              <div className="grid gap-5 sm:grid-cols-2">
                {profileFields.map((field) => (
                  <div
                    key={field.name}
                    className={field.wide ? "sm:col-span-2" : ""}
                  >
                    <Label htmlFor={field.name} className="mb-2 block">
                      {field.label}
                    </Label>

                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={editUser[field.name]}
                      onChange={handleChange}
                      readOnly={!isEditing}
                      className={`bg-white/70 ${
                        isEditing
                          ? "border-pink-200 focus-visible:ring-pink-500"
                          : "cursor-default"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Edit Actions */}

              {isEditing && (
                <div className="mt-7 flex flex-col-reverse gap-3 border-t border-amber-950/10 pt-5 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex h-10 items-center justify-center gap-2 rounded-lg border border-amber-950/10 bg-white px-5 text-sm font-medium text-[#4b2d24] shadow-sm transition-all hover:bg-[#f3eadc]"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSave}
                    className="flex h-10 items-center justify-center gap-2 rounded-lg bg-pink-600 px-5 text-sm font-medium text-white shadow-sm transition-all hover:bg-pink-700"
                  >
                    <Save className="h-4 w-4" />
                    Save Changes
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Orders Tab */}

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
