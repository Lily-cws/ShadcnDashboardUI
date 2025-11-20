"use client"
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

// This type is used to define the shape of our data.
export type User = {
    id: string;
    amount: number;
    username: string;
    email: string;
    phone: string;
    location: string;
    role: "Admin" | "User";
    status: "pending" | "processing" | "success" | "failed";

}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
  {
    accessorKey: "username",
    header: "User",
  },
    {
    accessorKey: "email",
    header: "Email",
  },
      {
    accessorKey: "location",
    header: "Location",
  },
        {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    cell: ({row}) => {
        const user = row.original;
        const userId = user.id;
        const router = useRouter();

        const handleViewUser = () => {
            router.push(`/users/${userId}`);
        }
        return(
            <Button  
                onClick={handleViewUser}
                variant="outline"
            >
                <Eye className="h-4 w-4" />
            </Button>

        )
    }
  }


];
