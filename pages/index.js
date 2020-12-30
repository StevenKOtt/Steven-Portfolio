import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout"
import MDList from "../components/MDList"
import matter from 'gray-matter'
import { withStyles } from '@material-ui/core/styles';

import ReactMarkdown from 'react-markdown'
import {Grid, Avatar, Divider, Tooltip, Paper, Link, Typography, Button,Menu,MenuItem,ListItemIcon,ListItemText} from '@material-ui/core/';
import ProfilePicture from '../images/profilepicture/Steven.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Bootstrap from '../images/skills/bootstrap.png'
import C from '../images/skills/c++.svg'
import CSS from '../images/skills/css.png'
import HTML from '../images/skills/html.png'
import Jira from '../images/skills/Jira.png'
import JQuery from '../images/skills/jquery.png'
import Js from '../images/skills/js.png'
import Mongo from '../images/skills/mongodb.png'
import MaterialUi from '../images/skills/MaterialUi.png'
import Netlify from '../images/skills/Netlify.png'
import Nodejs from '../images/skills/nodejs.png'
import Photoshop from '../images/skills/Photoshop.png'
import Postgres from '../images/skills/postgres.jpg'
import Rails from '../images/skills/rails.png'
import React2 from '../images/skills/react-js.png'
import Ruby from '../images/skills/ruby.png'
import S3 from '../images/skills/S3.png'
import LinkedIn from '../images/skills/LinkedIn.png'
import GitHub from '../images/skills/Github.png'
import Halloween from '../images/ProjectPhotos/Halloween.png'
import GamerGazebo from '../images/ProjectPhotos/GamerGazebo.png'
import TuoEmoc from '../images/ProjectPhotos/TuoEmoc.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
const skills = [
  {
   name: 'Bootstrap',
   photo: Bootstrap,
  },
  {
    name: 'C++',
    photo: C
  },
  {
    name: 'CSS',
    photo: CSS
  },
  {
    name: 'HTML' ,
    photo: HTML
  },
  {
    name: 'Jira',
    photo: Jira
  },
  {
    name: 'JQuery',
    photo: JQuery     
  },
  {
    name: 'JS',
    photo: Js
  },
  {
    name: 'MaterialUI',
    photo: MaterialUi
  },
  {
    name: 'MongoDB',
    photo: Mongo
  },
  {
    name: 'Netlify',
    photo: Netlify
  },
  {
    name: 'NodeJS',
    photo: Nodejs
  },
  {
    name: 'Postgres',
    photo: Postgres
  },
  {
    name: 'Rails',
    photo: Rails
  },
  {
    name: 'React',
    photo: React2
  },
  {
    name: 'Ruby',
    photo: Ruby
  },
  {
    name: 'S3',
    photo: S3
  }
]

const references = [{
  name: "Github",
  link: "https://github.com/StevenKOtt",
  photo: GitHub
},{
  name: "LinkedIn",
  link: "https://www.linkedin.com/in/stevenkarlott/",
  photo: LinkedIn
}
]
const projects = [
  {
    name: "Gamer Gazebo",
    photo: GamerGazebo,
    link: 'https://GamerGazebo.com',
    frontend:'https://github.com/StevenKOtt/Gamer_Gazebo_Client',
    backend:'https://github.com/StevenKOtt/Gamer_Gazebo_Api'
  },
  {
    name: "Tuo Emoc",
    photo: TuoEmoc,
    link: 'https://tuo-enoc.herokuapp.com/',
    frontend:'https://github.com/StevenKOtt/Tuo-Emoc',
    backend:'https://github.com/StevenKOtt/Tuo-Emoc'
  },
  {
    name: "Halloween Picks",
    photo: Halloween,
    link: 'https://eloquent-newton-3f7527.netlify.app/',
    frontend:'https://github.com/caitmp12/zen-project3-frontend/tree/dev',
    backend:'https://github.com/caitmp12/zen-project3-backend/tree/dev'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  title: {
      fontSize: 14
  },
  pos: {
      marginBottom: 12
  },
  paper: {
    background:'#d3d3d3'
  },
  large: {
      width: theme.spacing(50),
      height: theme.spacing(50)

  },
  media: {
    height: 140,
  },
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  center: {
    alignItems: 'center' 
  },
  project: {
    marginTop: 20
  },
  name: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  }
}));


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Index = ({allMD}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<Layout>
    {/* Begining columns down. */}
    <Grid container direction="column" alignItems="center" justify="center" spacing={3}> 
      <Grid item xs={12}></Grid>
      {/* //Profile picture row. */}
      <Grid container item xs={12} alignItems="center" justify="center">
      <Grid item xs={2}></Grid>
      <Grid item xs={4} style={{justifyContent: "center"}}>
          <Avatar className={classes.large} src={ProfilePicture} onClick={()=> window} />
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h4">
          Hi there, I’m Steven. I have a background in troubleshooting, software engineering, and integration support. Using my interpersonal skills, I build rapport for companies externally and internally, and thrive to be a resource in a variety of situations. Using my technical skills I want to build the relationship between Engineer and Success teams. 
        </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <Grid item xs={12}></Grid>
      <Grid container item xs={12} alignItems="center" justify="center" spacing={2}>
        {references.map((reference)=> (
         
            <Grid item xs={4} sm={2} style={{ justifyContent: "center", display: "flex" }} className={classes.center}>
            <a href={reference.link} target="_blank">
              <Tooltip title={reference.name} aria-label={reference.name}>
                  <Avatar src={reference.photo} className={classes.small}/>
              </Tooltip>
              </a> 
            </Grid>
         
          ))}
      </Grid>
      <Grid item xs={12}>
          <Typography variant='h2'>
            Skills
          </Typography>
      </Grid>
      <Grid container item direction='row' justify="center" alignItems="center" xs={12} space={2}>
        <Grid container item xs={10}  alignItems="center" justify="center" spacing={5}>
          {skills.map((skill)=> (
            <Grid item xs={4} sm={2} style={{ justifyContent: "center", display: "flex" }} className={classes.center}>
              <Tooltip title={skill.name} aria-label={skill.name}>
                  <Avatar src={skill.photo} className={classes.small}/>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
          <Typography variant='h2'>
            Projects
          </Typography>
      </Grid>
      <Grid container item xs={12} direction="row" alignItems="center" justify="center">
        {projects.map((project)=> (
        <Grid container item xs={12} sm={6} md={6} justify="center" className={classes.project}>
          <Paper elevation={5} className={classes.paper}>
               <Grid container item sm={12} direction="column"  alignItems="center" justify='center'>
                  <Grid container item sm={12} alignItems="center" justify='space-between' className={classes.name}>
                  <Grid item sm={6}>
                        <Typography variant="h4">
                            {project.name}
                        </Typography>
                  </Grid>
                  <Grid item sm={2}>
                  <Button
                    aria-controls={project.name}
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                  >
                  Code
                  </Button>
                  <StyledMenu
                    id={project.name}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link href={project.link} target="_blank"><StyledMenuItem>
                      <ListItemIcon>
                        <LiveTvIcon fontSize="Large" />
                      </ListItemIcon>
                      <ListItemText primary="Live" />
                    </StyledMenuItem></Link>
                    <a href={project.frontend} target="_blank"><StyledMenuItem>
                      <ListItemIcon>
                        <GitHubIcon fontSize="Large" />
                      </ListItemIcon>
                      <ListItemText primary="Frontend" />
                    </StyledMenuItem></a>
                    <a href={project.backend} target="_blank"><StyledMenuItem>
                      <ListItemIcon>
                        <GitHubIcon fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Backend" />
                    </StyledMenuItem></a>
                  </StyledMenu>
              </Grid>
               </Grid>
               </Grid>
                  
                  <Grid item xs={12}>
                      <Avatar src={project.photo} variant="rounded" className={classes.large}/>
                  </Grid>
          </Paper> 
          </Grid> 
        ))}
      </Grid>
    </Grid>
  </Layout>)
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const allMD = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../markdown', true, /\.md$/))

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      allMD
    },
  }
}
