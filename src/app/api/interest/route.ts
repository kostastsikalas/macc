import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Εδώ στο μέλλον θα μπει κώδικας για εγγραφή σε βάση δεδομένων (π.χ. Supabase)
    // Ή αποστολή email notification.
    
    console.log("=== Νέα Εκδήλωση Ενδιαφέροντος Smart-agro ===");
    console.log("Όνομα:", data.name);
    console.log("Ιδιότητα:", data.role);
    console.log("Τηλέφωνο:", data.phone);
    console.log("Email:", data.email || "Δεν δόθηκε");
    console.log("Περιοχή:", data.location);
    console.log("================================================");

    // Προσομοιώνουμε μια μικρή καθυστέρηση για το loading state
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, message: "Το αίτημα καταχωρήθηκε" }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ success: false, message: "Σφάλμα συστήματος" }, { status: 500 });
  }
}
