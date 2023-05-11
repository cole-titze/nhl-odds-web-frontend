import { ITeam, ISeasonStatTotals } from '../../types/types'
import { CardActionArea, Card, CardContent } from '@mui/material';
import TeamRow from './TeamRow';
import TeamRowHeader from './TeamRowHeader'
import TeamRowFooter from './TeamRowFooter';

interface IProps{
    teams: ITeam[],
    seasonStatTotals: ISeasonStatTotals
}
function TeamList(props: IProps): JSX.Element {
    const { teams, seasonStatTotals } = props;

    return (
        <div>
            <Card className="team-list-card">
                <CardContent>
                    <TeamRowHeader />
                </CardContent>
            </Card>
            {teams.map(( {id, teamName, locationName, logoUri, vegasLogLoss, modelLogLoss, totalGames, totalAccurateModelGames }) => {
                return (
                    <Card key={id} className="team-list-card">
                        <CardActionArea>
                        <CardContent>
                            <TeamRow team={{id, teamName, locationName, logoUri, vegasLogLoss, modelLogLoss, totalGames, totalAccurateModelGames }}/>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                );
            })}
            <Card className="team-list-card">
                <CardContent>
                    <TeamRowFooter seasonStatTotals={seasonStatTotals}/>
                </CardContent>
            </Card>
        </div>);
};
export default TeamList;