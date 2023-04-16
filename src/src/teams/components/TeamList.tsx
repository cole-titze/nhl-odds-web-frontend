import { ITeam } from '../types/types'
import { CardActionArea, Card, CardContent } from '@mui/material';
import TeamRow from './TeamRow';
import TeamRowHeader from './TeamRowHeader'

interface IProps{
    teams: ITeam[]
}
function TeamList(props: IProps): JSX.Element {
    const { teams } = props;

    return (
        <div>
            <Card className="team-list-card">
                <CardContent>
                    <TeamRowHeader />
                </CardContent>
            </Card>
            {teams.map(( {id, teamName, locationName, logoUri, vegasLogLoss, modelLogLoss }) => {
                return (
                    <Card key={id} className="team-list-card">
                        <CardActionArea>
                        <CardContent>
                            <TeamRow team={{id, teamName, locationName, logoUri, vegasLogLoss, modelLogLoss }}/>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                );
            })}
        </div>);
};
export default TeamList;