import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
}));

const Stats = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} id="stats">
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" align="justify">
            Stats Heading
          </Typography>
          <Typography variant="body1" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit
            vestibulum sem, at ornare quam mattis sit amet. Nullam pharetra felis eros, a
            hendrerit quam hendrerit vitae.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Stats;
