import Link from "next/link"
import { Fragment } from "react"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';





export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <div className="container mx-auto flex  flex-col md:flex-row md:overflow-hidden">
      <Box sx={{ width: 214 }} role="presentation" >
      <List>
         <Link href={'/dashboard/ManageAccounts'}>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'ManageAccounts'} />
            </ListItemButton>
          </ListItem>
          </Link>
         <Link href={'/dashboard/Payments'}>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Payments'} />
            </ListItemButton>
          </ListItem>
          </Link>
         <Link href={'/dashboard/Notifications'}>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Notifications'} />
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
      <Divider />
    </Box>
    {children}
      </div>
    </Fragment>
  )
}