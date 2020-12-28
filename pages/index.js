import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout"
import MDList from "../components/MDList"
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import {Grid, Avatar, Divider, Tooltip, Fab, Card, Paper, Typography} from '@material-ui/core/';
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
import React from '../images/skills/react-js.png'
import Ruby from '../images/skills/ruby.png'
import S3 from '../images/skills/S3.png'

import GamerGazebo from '../images/ProjectPhotos/GamerGazebo.png'
import TuoEmoc from '../images/ProjectPhotos/TuoEmoc.png'

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
    photo: React
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
const projects = [
  {
    name: "Gamer Gazebo",
    photo: GamerGazebo,
    link: 'https://GamerGazebo.com'
  },
  {
    name: "Tuo Emoc",
    photo: TuoEmoc,
    link: 'https://tuo-enoc.herokuapp.com/'
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
  }
}));



const Index = ({allMD}) => {
  const classes = useStyles();
  return (<Layout>
    {/* Begining columns down. */}
    <Grid container direction="column" alignItems="center" justify="center" spacing={3}> 
      <Grid item xs={12}></Grid>
      {/* //Profile picture row. */}
      <Grid item xs={12}>
        <Avatar className={classes.large} src={ProfilePicture}/>
      </Grid>
      <Grid item xs={12}></Grid>
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
      <Grid container item xs={12} direction="row" alignItems="center" justify="space-around">
        {projects.map((project)=> (
          <Paper elevation={5} className={classes.paper}>
             <Grid container item sm={12} direction="column" alignItems="center">
                  <Grid item sm={12}>
                      <Typography variant="h4">
                          {project.name}
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <Avatar src={project.photo} variant="rounded" className={classes.large}/>
                  </Grid>
             </Grid>
          </Paper>  
        ))}
      </Grid>
    </Grid>

    <MDList posts={allMD}/>
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
