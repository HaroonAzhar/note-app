import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { TopNav } from "./components/top-nav";
import { HomePage } from "./components/home-page";
import { RouteComponentProps, withRouter } from "react-router";

type AppComponentProps = RouteComponentProps;

const App: React.FC<AppComponentProps> = ({ history }) => {
  const [notes, setNotes] = React.useState<note[]>([]);

  React.useEffect(() => {
    const dummyNotes = [
      {
        id: "Odork5n5jPVd0wvm0w_dY",
        title: "Hey 👋",
        body:
          "I'm dummy note here. Try to update me. Click me to see my remaining part. You can also delete me 😔. But I'll be here again by reopening the app link 😃. "
      },
      {
        id: "Odork5n5jvew45vbtY",
        title: "1",
        body:
          "Example of fluid layout"
      },
      {
        id: "Odork5n5jvew45vbtY",
        title: "2",
        body:
          "Still need 3 more"
      },
      {
        id: "byh45dork5n5jvew45vbtY",
        title: "3",
        body:
          "Okay..."
      },
      {
        id: "qw65b4tvbcccrb5vbtY",
        title: "4",
        body:
          "Rndm  1,2,3"
      },
      {
        id: "dgbbdork5n5jvew45vbtY",
        title: "5",
        body:
          "Everthiing fits in perfetly"
      }
    ];
    setNotes(dummyNotes);
  }, []);

  const handleNoteCreate = (note: note) => {
    const newNotesState: note[] = [...notes];
    newNotesState.push(note);
    setNotes(newNotesState);
    if (history.location.pathname !== "/") history.push("/");
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={5}>
        <TopNav handleNoteCreate={handleNoteCreate} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage notes={notes} setNotes={setNotes} />}
          />
          <Redirect to="/" />
        </Switch>
      </Box>
    </ChakraProvider>
  );
};

export default withRouter(App);
