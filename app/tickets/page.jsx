// /tickets

import { Suspense } from "react";
import { TicketList } from "./TicketList";
import Loading from "../loading";

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
      </nav>

      {/* Wrapping the TicketList component with Suspense to make sure only this component shows Loading message while loading, everything else on the oage stays intact and loads immediately */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;